/**
 * [(lv.3)나이-통계-구하기.js]
 *
 * 1) users 배열은 [{ age: 10 }, { age: 30 }, ...] 형태를 가집니다.
 * 2) calculateStatistics(users)는 평균 나이(averageAge)와 최대 나이(maxAge)를 구해서
 *    { averageAge, maxAge } 객체 형태로 반환해야 합니다.
 * 3) reduce 메서드를 사용하세요.
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

function calculateStatistics(users) {
  const initialUser = { averageAge: 0, maxAge: 0 };
  if (users.length === 0) return initialUser;
  initialUser.maxAge = users[0].age;

  const user = users.reduce((user, a) => {
    user.averageAge += a.age;
    user.maxAge = Math.max(user.maxAge, a.age);
    return user;
  }, initialUser);

  user.averageAge = user.averageAge / users.length;
  return user;
}

// export 를 수정하지 마세요.
export { calculateStatistics };
