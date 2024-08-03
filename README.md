## Stack-inuse
- react.js
- nest.js
- postgresql
- k6 
- k8s (runcher)
- gitlab-ci
- gitlab-registy
- postman (test)

## Api:step
- เปิด postman
- import api-document (hlab-test/api-docs)
- ทดสอบความพร้อม api ที่เส้น health-check

## run-api:project
- กลับมาที่โปรเจค cd microservice/
- พิมพ์ git submodule update --init
- พิมพ์ คำสั่ง make prod

## loadtest-step (required K6-install ก่อน)
- cd unit-test
- `npm run breakpoint:local` ทดสอบประสิทธิภาพปริมาณการรับโหลด
- `npm run soak:local ` ทดสอบความคงที่ของ server ในการรับโหลดแบบนานๆ

## unit-test-step
- cd unit-test
- run npm test -- user
