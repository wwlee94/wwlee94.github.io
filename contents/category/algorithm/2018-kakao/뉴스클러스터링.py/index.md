---
title: '[프로그래머스] 뉴스 클러스터링 - [1차] 2018 카카오 / Python'
date: '2020-06-05'
category: 'algorithm'
description: ''
emoji: '🌤'
---

[[info | '뉴스 클러스터링' 문제 보러 가기 !]]
| https://programmers.co.kr/learn/courses/30/lessons/17677

## 문제 설명

`뉴스 클러스터링` 문제의 핵심

`자카드 유사도`라는 개념이 등장하는데, `자카드 유사도`는 문자열 사이의 유사도를 계산하는데도 이용할 수 있습니다.  
문자열 `FRANCE`와 `FRENCH`가 주어졌을 때, 이를 두 글자씩 끊어서 다중집합을 만들 수 있다.

각각의 집합은 `{FR, RA, AN, NC, CE}`, `{FR, RE, EN, NC, CH}`가 되며,  
교집합은 `{FR, NC}`,  
합집합은 `{FR, RA, AN, NC, CE, RE, EN, CH}`가 되므로, 두 문자열 사이의 `자카드 유사도` `J("FRANCE", "FRENCH") = 2/8 = 0.25`가 된다.

**이 문제는 해당 조건에 맞는 로직을 구현할 수 있는지 물어보는 문제입니다.**

> 저는 정규식, 집합, 해시를 사용하여 문제를 해결했습니다.

## 문제 접근 방식

1.  우선 문자열을 `두 글자`씩 끊어 `다중 집합`을 만들어야합니다.

2.  `다중 집합`을 구현하려면 각 두 문자열의 리스트를 다음과 같이 만듭니다.

    - temp = set(set_A | set_B)
    - 그러면 두 문자열의 모든 종류가 담깁니다 !

3.  위에서 나온 모든 종류를 순회하며 각 문자열의 개수를 `Dictionary`로 셉니다.

    - 개수가 작은 것은 추후 교집합이 되고 큰 것은 합집합에 포함된다.

4.  나온 `교집합`과 `합집합`을 문제의 조건에 맞게 계산하여 결과를 출력합니다.

## 풀이 코드

```python:title=Python
import re
def solution(str1, str2):
    p = re.compile('[a-z]{2}')

     # 문자열을 두 글자씩 끊어 리스트로 만들어주는 메서드
    def split_list(string):
        leng = len(string)
        string = string.lower()
        i = 0 ; j = 1
        arr = []
        for _ in range(leng-1):
            res = string[i] + string[j]
            if p.match(res):
                arr.append(res)
            i += 1
            j += 1
        return arr

    list_A = split_list(str1)
    list_B = split_list(str2)

    set_A = set(list_A)
    set_B = set(list_B)
    temp = set(set_A | set_B)  # 각 A, B 집합의 합집합의 모든 종류

    # 교집합, 합집합 종류를 count 해주는 dictionary
    inter_dic = {}
    union_dic = {}
    for t in temp:
        a_count = list_A.count(t)
        b_count = list_B.count(t)
        inter_dic[t] = min(a_count, b_count)
        union_dic[t] = max(a_count, b_count)

    # 다중 집합의 교집합
    intersection = []
    for key in inter_dic:
        for i in range(inter_dic[key]):
            intersection.append(key)

    # 다중 집합의 합집합
    union = []
    for key in union_dic:
        for i in range(union_dic[key]):
            union.append(key)

    answer = 0
    if len(union) == 0:
        answer = 1
    elif len(intersection) == 0:
        answer = 0
    else:
        answer = len(intersection) / len(union)
    return int(answer * 65536)
```
