import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";

let errorRate = new Rate("errors");
let baseUrl = "http://localhost:8080";
// let baseUrl = "http://10.147.20.2:3000";

export const options = {
  stages: [
    { duration: "1m", target: 300 },  // ramp-up to 300 VUs over 1 minute
    { duration: "5m", target: 600 },  // stay at 300 VUs for 5 minutes
    { duration: "1m", target: 0 },    
  ],
  thresholds: {
    errors: ["rate<0.1"], // Error rate should be less than 10%
    http_req_duration: ["p(95)<2000"], // 95% of requests should be below 2000ms
  }
};

export default function () {
  const url = baseUrl + "/sender/services/post-passport";
  const payload = JSON.stringify({
    sender_code: "ccdc-center",
    message: {
      title: "เอกสารการประชุมการทำงาน",
      file: "file.pdf",
      date: "10/20/2567"
    }
  });

  const params = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const res = http.post(url, payload, params);
  
  check(res, {
    "is status 201": (r) => r.status === 201
  });
  
  sleep(1);
}
