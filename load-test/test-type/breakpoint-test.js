import http from "k6/http";
import { check, sleep } from "k6";
import { Rate } from "k6/metrics";

let errorRate = new Rate("errors");

let baseUrl = "http://localhost:8080";

export const options = {
  vus: 100,
  stages: [
    { duration: "1s", target: 50 },
    { duration: "4s", target: 100 },
    { duration: "2m", target: 100 },
    { duration: "50s", target: 100 },
    { duration: "10s", target: 100 }
  ],
  thresholds: {
    errors: ["rate<0.1"],
    http_req_duration: ["p(95)<200"]
  }
};

export default function () {
  const url = baseUrl + "/products/create";
  const payload = JSON.stringify({
    product_id: 1,
    name: "Sample Product"
  });
  
  const params = {
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "th"
    }
  };
  const res = http.post(url, payload, params);

  check(res, {
    "status is 201": (r) => r.status === 201
  });
  sleep(1);
}
