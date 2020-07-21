---
title: '[프로그래머스] 그리디 - 섬 연결하기 / Python'
date: '2020-06-15'
category: 'algorithm'
description: ''
emoji: '🏝'
---

[[info | LEVEL 3 - '섬 연결하기' 문제 보러 가기 !]]
| https://programmers.co.kr/learn/courses/30/lessons/42861

## 문제 설명

n개의 섬 사이에 다리를 건설하는 비용(costs)이 주어질 때, 최소의 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return 하도록 solution을 완성하세요.

다리를 여러 번 건너더라도, 도달할 수만 있으면 통행 가능하다고 봅니다.  
예를 들어 A 섬과 B 섬 사이에 다리가 있고, B 섬과 C 섬 사이에 다리가 있으면 A 섬과 C 섬은 서로 통행 가능합니다.

## 문제 접근 방식

그리디 알고리즘 분류에 있던 문제라 그래프 문제는 안나오는 줄 알았지만 !!  
문제를 보고 바로 `그래프 + 그리디` 알고리즘 임을 깨달았습니다.  
`크루스칼`, `프림` 알고리즘 모두 `그래프 + 그리디` 알고리즘에 속한다는 것을.. 🤭

해당 문제는 `최소 신장 트리(MST)`를 구현하는 문제입니다.

즉, `크루스칼` 또는 `프림` 알고리즘으로 `최소 신장 트리`를 구현하기만 하면 해결 할 수 있는 문제입니다.

저는 `크루스칼` 알고리즘을 사용하여 문제를 접근했습니다.

#### 크루스칼 알고리즘이란 ?

현재 상황 기준으로 가장 최적의 답을 선택해 문제를 푸는 `그리디 알고리즘`을 사용하여 모든 정점을 최소 비용으로 연결하는 최적 해답을 구하는 알고리즘입니다.

#### 크루스칼 구현 과정

1. 그래프의 간선들을 비용의 오름차순으로 정렬합니다.

   > 이는 비용이 가장 적은 간선을 선택하기 위함입니다.

2. 가장 비용이 작은 간선을 선택합니다.

   - 선택한 간선이 사이클을 이룬다면, 제외합니다.
   - 사이클을 이루지 않는다면 해당 간선을 선택합니다.

3. 최종적으로 선택한 간선의 가중치를 모두 합하여 반환합니다.

## 풀이 코드

```python:title=Python
def solution(n, costs):
    # 부모 노드를 찾는 함수
    def get_parent(parent, x):
        if parent[x] == x: return x
        parent[x] = get_parent(parent, parent[x])
        return parent[x]

    # 두 부모 노드를 합치는 함수
    def union_parent(parent, x, y):
        x = get_parent(parent, x)
        y = get_parent(parent, y)

        # 더 작은 값을 부모로 지칭
        if x < y: parent[y] = x
        else: parent[x] = y

    # 두 노드가 같은 부모를 가지는 지 찾는 함수
    def is_same_parent(parent, x, y):
        x = get_parent(parent, x)
        y = get_parent(parent, y)

        if x == y: return True
        else: return False

    # 특정 간선의 부모 정보 (초기는 자기 자신을 가리킴)
    parent = [0] * len(costs)
    for i in range(len(costs)):
        parent[i] = i

    answer = [] # 선택될 간선을 담을 리스트
    costs.sort(key=lambda x:x[2]) # 비용이 가장 작은 간선부터 선택

    # 주어진 간선이 최소 간선의 개수 일때 (n-1개)
    if len(costs) == n-1:
        return sum(map(lambda x:x[2], costs))

    # 총 만들어지는 간선의 개수는 n-1개
    while len(answer) < n-1:
        edge = costs.pop(0)
        # 두 점의 부모가 같은지 Check
        if not is_same_parent(parent, edge[0], edge[1]):
            union_parent(parent, edge[0], edge[1])
            answer.append(edge[2])

    return sum(answer)
```

## 마무리

`크루스칼 알고리즘`의 핵심은 사이클을 이루는지에 대한 여부를 확인하는 로직을 구현하는 것입니다.  
저는 현재 집합이 같은 부모를 향하고 있는지(사이클이 발생하는지) 여부를 알 수 있는 `Union-Find`라는 알고리즘을 사용하여 문제를 해결했습니다.

또한, 주의할 점은 주어진 간선(`costs`의 개수) 이 `(n-1)개` 일 경우 입니다.  
해당 경우에는 그냥 주어진 간선의 비용을 모두 합해서 return하면 됩니다.

코드의 길이는 각 기능을 함수로 빼는 과정에서 풀이가 길어진 것 같습니다.

더 좋은 방법이 있다면 알려주세욘 🙇🏻‍♂️
