---
title: '[토비의 스프링] 1. 오브젝트와 의존관계 - XML을 이용한 DI 설정'
date: '2020-06-14'
category: 'spring'
description: '스프링 XML 의존성 설정'
emoji: '🚧'
---

## XML 설정 포스팅을 보기 전에

`Spring Boot`로 개발을 많이 진행하면서, 또 몇가지 이유 등으로 `XML` 파일 설정은 최근 잘 사용되지 않으니 해당 포스팅은 참고용으로 보시길 바랍니다. !

**JavaConfig의 이점**

참고 링크 : https://stackoverflow.com/questions/29162278/benefits-of-javaconfig-over-xml-configurations-in-spring

## XML을 이용한 DI 설정

**클래스 설정과 XML 설정의 대응 항목**

|             | 자바 코드 설정 정보    | XML 설정 정보            |
| :---------- | :--------------------- | :----------------------- |
| 빈 설정파일 | @Configuration         | `<beans>`                |
| 빈의 이름   | @Bean methodName()     | `<bean id="methodName">` |
| 빈의 클래스 | return new BeanClass() | `class="BeanClass">`     |

---

또한, XML에서는 `<property>` 태그를 사용해 의존 오브젝트와의 관계를 정의합니다.

`<property>` 태그는 name과 ref 라는 두 개의 애트리뷰트를 갖습니다.

- **name**

  - 수정자 메소드의 프로퍼티의 이름

- **ref**

  - 수정자 메소드를 통해 주입해줄 오브젝트의 빈 ID

**예시)**

JAVA

```java:title=Java
@Configuration
public class DaoFactory{
  @Bean ConnectionMaker myConnectionMaker(){
    return new DConnectionMaker();
  }

  @Bean
  public UserDao userDao(){
    UserDao userDao = new UserDao();
    userDao.setConnectionMaker(myConnectionMaker());
    return userDao;
  }
}
```

XML

```xml:title=XML
</beans>
  <bean id="myConnectionMaker" class="springbook.user.dao.DConnectionMaker" />

  <bean id="userDao" class="springbook.dao.UserDao">
    <property name="connectionMaker" ref="myConnectionMaker" />
  </bean>
</beans>
```

#### 프로퍼티 값의 주입

**값 주입**

다른 오브젝트의 레퍼런스가 아닌 단순 정보도 수정자 메소드에 넣을 수 있습니다.

**EX)**

```xml:title=XML
<property name="username" value="spring" />
```

단, 여기서 모두 `String` 타입으로 주입되는 것이 스프링이 프로퍼티의 값을, 수정자 메소드의 파라미터 타입을 참고로 해서 적절한 형태로 변환 시켜줍니다.

> Integer, Double, String, Boolean 기본 타입 + Class, URL, File 같은 오브젝트 + List, Map, Set 등으로도 값의 주입이 가능합니다.
