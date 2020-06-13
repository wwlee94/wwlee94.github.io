---
title: '[토비의 스프링 Vol.1] 1. 오브젝트와 의존관계 - 스프링의 IoC'
date: '2020-06-13'
category: 'spring'
description: ''
emoji: '📖'
---

## 스프링의 IoC

스프링은 애플리케이션 개발의 다양한 영역과 기술에 관여하고 많은 기능을 제공합니다.

하지만, 스프링의 핵심을 담당하는 것은 `빈 팩토리` 또는 `애플리케이션 컨텍스트`이 스프링의 핵심입니다.  
이 두가지는 `DaoFactory`가 하는 일을 더 일반화 시킨 버전입니다.

> Factory의 역할 : 애플리케이션의 설계도 역할

컴포넌트를 생성한다던지, 의존 관계를 맺어주는 등등 ..

## 오브젝트 팩토리를 이용한 스프링 IoC

#### 애플리케이션 컨텍스트와 설정 정보

스프링에서는 스프링이 `제어권 + 관계`를 부여하는 객체를 `빈(bean)`이라고 부릅니다.  
동시에, `빈의 생성`과 `관계 설정`과 같은 제어를 담당하는 IoC 객체를 `빈 팩토리(bean factory)`라고 부르며 보통 빈 팩토리 보다는 `애플리케이션 컨텍스트`를 주로 사용합니다.

[[info | 애플리케이션 컨텍스트란 ?]]
| IoC 방식을 따라 만들어진 일종의 빈 팩토리  
| 두 가지가 앞으로 동일하다고 생각하면 OK !

`애플리케이션 컨텍스트`는 설정 정보, 관계 정보 등을 직접 담고 있지는 않습니다.  
대신, 별도로 설정 정보를 담고 있는 무엇인가를 가져와 이를 활용하는 범용적인 IoC 엔진이라고 볼 수 있다.

> 별도의 설정 정보 : 자바 코드의 `@Configuration` or `XML 설정` 파일

#### DaoFactory를 사용하는 애플리케이션 컨텍스트

`애플리케이션 컨텍스트`가 사용할 설정 정보를 담은 `DaoFactory`

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration // 애플리케이션 컨텍스트가 사용할 설정 정보라는 어노테이션
public class DaoFactory{
  @Bean // 오브젝트 생성을 담당하는 IoC용 메소드
  public UserDao userDao(){
    return new UserDao(connectionMaker());
  }

  @Bean
  public ConnectionMaker connectionMaker(){
      return new DConnectionMaker(); // 개발 전용
  }
}
```

애플리케이션 컨텍스트를 적용한 코드

```java
public class UserDaoTest{
  public static void main(String[] args) throws ClassNotFoundException, SQLException {
    ApplicationContext context = new AnnotationConfigApplicationContext(DaoFactory.class);
    // 위에서 등록한 @Bean 메서드의 이름으로 요청
    UserDao dao = context.getBean("userDao", UserDao.class);
  }
}
```

> 뒤에서도 나오지만 XML 버전 애플리케이션 컨텍스트 적용도 나옵니다.

#### 애플리케이션 컨텍스트의 동작 방식
