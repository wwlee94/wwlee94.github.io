---
title: '[프로그래머스] DFS & BFS - 단어 변환 / Python'
date: '2020-06-21'
category: 'algorithm'
description: ''
emoji: '🔄'
---

[[info | LEVEL 3 - '단어 변환' 문제 보러 가기 !]]
| https://programmers.co.kr/learn/courses/30/lessons/43163

## 문제 설명

두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.

1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
2. words에 있는 단어로만 변환할 수 있습니다.

예를 들어 begin이 'hit', target가 'cog', words가 ['hot','dot','dog','lot','log','cog']라면 'hit' -> 'hot' -> 'dot' -> 'dog' -> 'cog'와 같이 4단계를 거쳐 변환할 수 있습니다.

두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.

#### 제한 사항

- 각 단어는 알파벳 소문자로만 이루어져 있습니다.
- 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
- words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
- begin과 target은 같지 않습니다.
- 변환할 수 없는 경우에는 0를 return 합니다.

## 문제 접근 방식

`단어 변환` 문제의 핵심 !

- 각 단어가 변환될 수 있는 모든 경우를 탐색하며 target 단어가 선택 되는 최소 층(level)을 구하는 문제입니다.

`가장 최소가 되는 단계`를 구하는 문제이기 때문에 DFS가 아닌 `BFS로 접근`해서 문제를 해결해야합니다.

1. 현재 노드에서 갈 수 있는 다른 경로 구하는 함수를 작성합니다.

2. `1번 함수`를 사용해 각 노드 별 변환 될 수 있는 모든 노드 리스트를 저장합니다.

3. 문제에서 주어지는 `첫 단어를 시작`으로 `BFS`로 인접한 노드를 방문합니다.

4. 현재 단어와 target이 같으면 `현재 층`(level)을 반환합니다.

**path에 담기는 정보 예시**

초기 정보가 다음과 같을 때

```python:title=초기값
begin = 'hit'
words = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
```

path 변수의 출력 예시

- 주어진 모든 `words`에 대해 각 단어가 갈 수 있는 경로를 담은 것

```json:title=path변수
{
  "hot": ["dot", "lot", "hit"],
  "dot": ["hot", "dog", "lot"],
  "dog": ["dot", "log", "cog"],
  "lot": ["hot", "dot", "log"],
  "log": ["dog", "lot", "cog"],
  "cog": ["dog", "log"],
  "hit": ["hot"]
}
```

## 풀이 코드

```python:title=Python
def solution(begin, target, words):
    # 1. 현재 노드에서 갈 수 있는 다른 경로 구하는 함수
    def get_path(current):
        arr = []
        for word in words:
            count = 0
            for i in range(len(current)):
                if current[i] == word[i]: count += 1
            if count == len(current) - 1:
                arr.append(word)
        return arr

    # 2. path에 각 노드 별 변환 될 수 있는 모든 노드 리스트 저장
    def init_path():
        path = {}
        words.append(begin) # 초기값도 추가

        # path 초기화
        for word in words:
            res = get_path(word)
            if word not in path.keys():
                path[word] = res
            else:
                path[word].append(res)
        return path

    def bfs():
        answer = []
        queue = [(begin, [begin])]
        path = init_path()

        # 3. 첫 단어를 시작으로 BFS로 인접한 노드를 방문합니다.
        while queue:
            current, visited = queue.pop(0)

            # 4. 현재 단어와 target이 같으면 정답에 도달 !
            if current == target:
                answer = visited
                break

            # 인접한 노드를 방문
            for node in path[current]:
                if node not in visited:
                    queue.append((node, visited + [node]))
        return len(answer) - 1

    # target이 words에 없으면 답을 못 구하니 0 반환
    if target not in words: return 0

    answer = bfs()

    return answer
```
