![Project Logo](logo.jpg)

## Hlab-Test

## Stack-inuse
- React.js
- Nest.js
- PostgreSQL
- K6
- K8s (Rancher)
- GitLab CI
- GitLab Registry
- Postman (Test)

## Api:step
- เปิด Postman
- Import API document (`hlab-test/api-docs`)
- ทดสอบความพร้อม API ที่เส้น `health-check`

## Run-API:project
- กลับมาที่โปรเจค `cd microservice/`
- พิมพ์ `git submodule update --init`
- พิมพ์คำสั่ง `make prod`

## Loadtest-step (required K6-install ก่อน)
- `cd unit-test`
- `npm run breakpoint:local` ทดสอบประสิทธิภาพปริมาณการรับโหลด
- `npm run soak:local` ทดสอบความคงที่ของ server ในการรับโหลดแบบนานๆ

## Unit-test-step
- `cd unit-test`
- Run `npm test -- user`