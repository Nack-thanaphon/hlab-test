### 1. useCallback ใช้ทำอะไร

`useCallback` ใช้เพื่อลดการ re-render ของ UI ที่ไม่จำเป็น เพื่อเพิ่มประสิทธิภาพในการทำงานของแอปพลิเคชัน ตัวอย่างการใช้งาน `useCallback`:

```javascript
import React, { useState, useCallback } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>เพิ่มสินค้า</button>
    </div>
  );
};

export default Page;
```

### 2. Performance Test Strategy Plan

- `resource` และประเมินผู้ใช้งาน รวมถึงการออกแบบโค้ดที่รองรับการ scale-out

- `Queue` : เพื่อรองรับ load ปริมาณเยอะๆควรมี  คิวมาช่วยจัดการงานที่มีผู้ใช้งานพร้อมกัน
- `Cache` : เพื่อลดการทำงานของ server ในการโหลดข้อมูลซ้ำๆเดิม หรือ ข้อมูลที่ไม่จำเป็ต้องอ่าน/เขียน database บ่อยๆ
- `Logs`: ควรเก็บ logs การทำงานของระบบ เพื่อตรวจสอบว่าระบบจะไม่เกิดข้อผิดและควรออกแบบให้เข้าใจได้ทันทีว่าปัญหาที่เกิดขึ้นมาจากอะไร
- `Cost` : ประเมิณค่าใช้จ่ายที่สามารถยอมรับได้ และไม่เกินตัว ต้องออกแบบแผนรองรับ งบประมาณให้เพียงพอเพื่อไม่ให้เกิดปัญหาภายหลัง
- `Database Management` : ควรตั้ง database ให้เป็น standalone และควรทำ backup และ tuning เพื่อให้สามารถทำงานได้อย่างเต็มที่
- `Database Scaling` : ออกแบบ Database ที่สามารถรองรับการ scale-up ได้ check ประสิทธิภาพในการอ่านเขียนของฐานข้อมูล
- `ปริมาณผู้ใช้งาน` : ประเมิณผู้ใช้งานระบบกลาง และ ระดับสูงเพื่อ ทดสอบว่า resource ที่เราเตรียมไว้สามารถรองรับการใช้งานของ user ได้
- `การบำรุงรักษา` : ควรทำ staging development production นำ git-version มาใช้งานเพื่อที่จะสามารถ tracking การทำงานภายในทีมได้
- `Unit Test` : `stop test on production` ควรทดสอบให้ดีว่า version ที่ deploy สามารถใช้งานได้และไม่เกิดปัญหา หากเกิดปัญหาควรมีวิธีการ rollback-version กลับไปให้ไวที่สุด

## 3.Design and develop two APIs using NestJS and Postgres with the following specifications
- connect posgress
- use typeorm 
- database-status
## 4.Multilingual Product API
- nest g resource 
- typeorm
- interface 
- abstact-class
- method 
- error-handled

## 5.Testing Strategy

ประเมิณ breakpoint และคอขวด network database aplication internet
ทำ soaktest เพื่อทดสอบ ความทนทานของ server
ประเมิณความถูกต้อง error-handler return http-status test-case

## 6.Unit-test UI

render ได้ถูกต้องไม่ error ไม่หน่วง
ควรเขียน test-case ให้ครอบคุมเพื่อลดการเกิดปัญหาในอนาคต
แยก statging success-case and fail-case

