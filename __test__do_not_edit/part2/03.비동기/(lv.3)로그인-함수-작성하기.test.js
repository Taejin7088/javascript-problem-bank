import { safeLogin } from "../../../part2/03.비동기/(lv.3)로그인-함수-작성하기.js";

describe("(lv.3)로그인-함수-작성하기.js 테스트", () => {
  it('id="admin", pw="1234"이면 "ok"를 반환해야 한다.', async () => {
    const result = await safeLogin("admin", "1234");
    expect(result).toBe("ok");
  });

  it('id나 pw가 다르면 "fail"을 반환해야 한다.', async () => {
    const result1 = await safeLogin("admin", "9999");
    const result2 = await safeLogin("user", "1234");
    expect(result1).toBe("fail");
    expect(result2).toBe("fail");
  });

  it('에러가 발생하면 "error"를 반환해야 한다.', async () => {
    try {
      const result = await safeLogin("admin", "throwError");
      expect(result).toBe("error");
    } catch (error) {
      expect(error).toBe("error");
    }
  });
});
