---
title: '[토비의 스프링] 3. 전략 패턴과 템플릿/콜백에 대해서'
date: '2020-06-23'
category: 'study'
description: 'Java, Spring 템플릿/콜백 패턴에 대해서'
emoji: '📃'
---

## 개요

`확장`에는 자유롭게 열려있고 `변경`에는 굳게 닫혀 있다는 객체 지향 설계의 핵심 원칙인 `개방 폐쇄 원칙`(OCP) 을 생각해봅시다.  
각각 다른 목적과 이유에 의해서 다른 시점에 독립적으로 변경될 수 있는 효율적인 구조를 만들어주는 것이 `개방 폐쇄 원칙`입니다.

`템플릿`이란 이렇게 바뀌는 성질 중에서도 `변경이 일어나지 않는 성질을 가진 부분`을 `자유롭게 변경되는 성질을 가진 부분`으로부터 분리시켜 효과적으로 재사용할 수 있도록 하는 방법입니다.

## 변하는 것과 변하지 않는 것

JDBC에서 `try/catch/finally` 예외 처리를 적용한 코드를 보면서 생각해봅시다.

```java:title=Java
public void deleteAll() throws SQLException {
    Connection c = null;
    PreparedStatement ps = null;

    try {
        c = dataSource.getConnection();
        ps = c.prepareStatement("delete from users"); // 변하는 부분
        ps.executeUpdate();
    } catch (SQLException e) {
        throw e;
    } finally {
        if (ps != null) {
            try {
                ps.close();
            } catch (SQLException e) {
            }
        }

        if (c != null) {
            try {
                c.close();
            } catch (SQLException e) {
            }
        }
    }
}
```

코드를 보자마자 너무 막막합니다 😦  
복잡한 `try/catch/finally` 블록이 2중으로 중첩까지되며 만드는 모든 메소드마다 코드가 반복될 것입니다.

**이런 코드를 효과적으로 다룰 수 있는 방법은 없을까?**

이 문제의 핵심은 많은 곳에서 `중복되고 변하지 않는 코드` 와 `자주 확장되고 변하는 코드`를 `분리`해내는 작업입니다.

위의 코드에서 `변하지 않는 부분`과 `변하는 부분`을 분리할 수 있습니다.

1. 변하지 않는 부분

   - DB를 연결하고 쿼리를 실행시키고 리소스를 반환(close) 작업

2. 변하는 부분
   - PrepareStatement를 생성하는 작업 + 쿼리문

#### 작업의 분리

이렇게 구분지은 작업을 분리하는 방법은 보통 `3가지 방법`으로 접근할 수 있습니다.

1. 메소드 추출 방법

2. 템플릿 메소드 패턴의 적용

3. 전략 패턴의 적용

첫번째, `메소드 추출 방법`은 중복이 많이 일어나는 변하지 않는 부분을 메소드로 추출해야하지만, 변하지 않는 부분이 변하는 부분을 감싸는 구조이기에 적용이 애매합니다.

두번째, `템플릿 메소드 패턴 방법`은 상속을 통해 기능을 확장시키는 방법입니다.  
하지만, 상속은 다중 상속이 불가능하고 DAO 로직마다 상속을 통해 새로운 클래스를 생성해야한다는 단점이 있습니다.

세번째, `전략 패턴 방법`은 오브젝트를 아예 둘로 분리하고 인터페이스를 통해서만 의존하도록 만드는 방법입니다.

#### 전략 패턴의 적용

여기서는 세번째 `전략 패턴 방법`을 적용해보려고 합니다.

변하는 부분을 분리한 것을 전략 패턴에서 `전략`이라고 합니다.

먼저, 이를 인터페이스로 분리하면

**1. StatementStrategy 전략 인터페이스**

```java:title=Java
public interface StatementStrategy {
    PreparedStatement makePreparedStatement(Connection c) throws SQLException;
}
```

**2. deleteAll() 메소드의 기능을 구현한 StatementStrategy 전략 클래스**

```java:title=Java
public class DeleteAllStatement implements StatementStrategy {
    @Override
    public PreparedStatement makePreparedStatement(Connection c) throws SQLException {
        PreparedStatement ps = c.prepareStatement("delete from users");
        return ps;
    }
}
```

다음으로 변하지 않는 부분을 분리합니다.  
변하지 않는 부분을 분리한 것을 `컨텍스트`라고 합니다.

**3. 중복되는 코드를 분리한 컨텍스트 코드**

```java:title=Java
public void jdbcContextWithStatementStrategy(StatementStrategy stmt) throws SQLException {
    Connection c = null;
    PreparedStatement ps = null;

    try {
        c = dataSource.getConnection();
        ps = stmt.makePreparedStatement(c); // 컨텍스트에서 전략 사용
        ps.executeUpdate();
    } catch (SQLException e) {
        throw e;
    } finally {
        if (ps != null) { try { ps.close();} catch (SQLException e) {}}
        if (c != null) { try { c.close();} catch (SQLException e) {}}
    }
}
```

다음으로 `클라이언트`에서 직접적으로 `전략을 생성, 선택`해 사용하는 메서드를 작성합니다.  
전략을 생성하고 생성한 전략을 컨텍스트에 `DI` 해줍니다.

**4. 클라이언트 책임을 담당할 deleteAll() 메소드**

```java:title=Java
public void deleteAll() throws SQLException {
    StatementStrategy st = new DeleteAllStatement();
    jdbcContextWithStatementStrategy(st);
}
```

이제 구조로 볼때는 완벽한 전략 패턴의 모습을 만들었습니다.

#### 더 개선할 점

지금의 구조로는 `DAO` 메소드마다 새로운 `StatementStrategy` 구현 클래스를 만들어야 합니다.

해결 방법은 `익명 클래스` or `람다`를 활용해 문제점을 해결할 수 있습니다.

**람다를 활용한 예제**

Java 8버전에서 제공되는 `람다`를 사용하려면 인터페이스는 하나의 추상 메소드를 가지는 인터페이스로 정의해야합니다.

위와 같이 하나의 추상 메소드 가지는 인터페이스를 `함수형 인터페이스`라고 부릅니다.

추가적으로 `@FunctionalInterface`라는 어노테이션이 있는데, 함수형 인터페이스를 명시적으로 컴파일러에게 알려 함수형 인터페이스의 조건을 위반하면 컴파일러는 예러를 발생시킵니다.

```java:title=Java
@FunctionalInterface
public interface StatementStrategy {
    PreparedStatement makePreparedStatement(Connection c) throws SQLException;
}
```

```java:title=Java
public void deleteAll() throws SQLException {
    jdbcContextWithStatementStrategy((Connection c) -> {
        return c.prepareStatement("delete from users");
    });
}
```

## 템플릿과 콜백

지금까지 만든 코드는 `전략 패턴`이 적용되었다고 말할 수 있습니다.  
위의 코드들 처럼 복잡하지만 바뀌지 않는 일정한 패턴을 갖는 작업 흐름이 존재하고 그중 일부만 자주 바꿔서 사용해야하는 경우에 적합한 구조입니다.

전략 패턴의 기본 구조에 익명 내부 클래스 , 람다를 활용한 방식을 스프링에서는 `템플릿/콜백` 패턴이라고 부릅니다.

전략 패턴의 컨텍스트를 `템플릿`이라하고 익명 클래스, 람다로 만들어지는 오브젝트를 `콜백`이라고 부릅니다.

#### 템플릿/콜백의 동작 방식

`클라이언트`의 역할은 템플릿 안에서 실행될 로직을 담은 콜백 오브젝트를 생성하고 콜백이 참조할 정보를 제공합니다.

`템플릿`은 내부에서 생성한 참조 정보를 가지고 콜백 오브젝트의 메소드를 호출합니다.  
그 후, 콜백은 클라이언트의 정보와 메소드를 가지고 작업을 수행 한 뒤 다시 템플릿에게 결과를 반환합니다.

`템플릿`은 콜백이 반환한 정보를 가지고 작업을 마저 수행합니다.  
경우에 따라 최종 결과를 클라이언트에게 반환합니다.

#### 템플릿/콜백의 응용

스프링 개발자라면 `템플릿/콜백` 기능을 잘 사용하거나 필요한 곳이 있으면 직접 만들어 사용할 수 있어야 한다고 합니다.

고정된 작업 흐름을 갖고 있으면서 여러 곳에서 자주 반복되는 코드가 있다면, 중복되는 코드를 분리할 방법을 생각해보는 습관을 가지면 좋습니다.

먼저 `메소드로 분리`해보고 인터페이스를 사용하여 `전략 패턴`을 적용해 DI로 의존 관계를 관리하도록 만듭니다.  
그런데, 여기서 바뀌는 부분이 한 어플리케이션 안에서 동시에 `여러 종류`로 만들어 질 수 있다면 이번엔 `템플릿/콜백` 패턴을 적용할 수 있습니다.

다음 파일을 읽어 수를 더하거나 곱하는 예제를 보고 더 깊게 이해해봅시다 !

**더하기 메소드**

```java:title=Java
public Integer calSum(BufferedReader br){
    Integer sum = 0;
    String line = null;
    while((line==br.readline()) != null){
        sum += Integer.valueOf(line); // 바뀌는 코드
    }
    return sum;
}
```

**곱하기 메소드**

```java:title=Java
public Integer calMultiply(BufferedReader br){
    Integer multiply = 1;
    String line = null;
    while((line==br.readline()) != null){
        multiply *= Integer.valueOf(line); // 바뀌는 코드
    }
    return multiply;
}
```

조금만 살펴봐도 두 코드가 아주 유사함을 알 수 있습니다.

1. 결과를 저장할 변수를 초기화
2. BufferedReader를 이용해 파일을 한줄 한줄 읽습니다.
3. 변수에 계산한 결과를 저장합니다.
4. 파일을 다 읽었으면 결과를 리턴합니다.

템플릿과 콜백을 찾아낼때는 변하는 코드의 경계를 찾고 그 경계를 사이에 두고 주고 받는 일정한 정보가 있는지 확인하면 됩니다.

여기서 바뀌는 코드는 단 한줄입니다.

바뀌는 코드(콜백)을 인터페이스로 정의합니다.

**라인별 작업을 정의한 인터페이스**

```java:title=Java
@FunctionalInterface
public interface LineCallback{
    Integer doSomethingWithLine(String line, Integer value);
}
```

**LineCallback을 사용하는 템플릿**

```java:title=Java
public Integer lineReadTemplate(String filepath, LineCallback callback, int initVal){
    BufferedReader br = null;
    try{
        br = new BufferedReader(new FileReader(filepath));
        Integer res = initVal;
        String line = null;
        while((line==br.readline()) != null){
            res = callback.doSomethingWithLine(line, res);
        }
        return res;
    }
    catch(){...}
    finally{...}
}
```

**템플릿을 사용하도록 수정한 calSum() 메서드**

```java:title=Java
public Integer calSum(String filepath){
    LineCallback sumCallback = (line, value) -> { return value + Integer.valueOf(line); };
    return lineReadTemplate(filepath, sumCallback, 0);
}
```

#### 제네릭스를 활용한 콜백 인터페이스

`제네릭`을 사용하면 좀 더 강력한 `템플릿/콜백` 구조를 만들 수 있습니다.

위의 예제는 결과가 `Integer`로 고정되어 있지만 `제네릭`을 사용하면 다양한 오브젝트를 지원할 수 있습니다.

```java:title=Java
public interface LineCallback<T>{
    T doSomethingWithLine(String line, T value);
}
```
