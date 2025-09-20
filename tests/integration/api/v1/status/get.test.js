test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toBeDefined();
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  expect(typeof responseBody.dependencies.database.max_connections).toEqual(
    "number",
  );
  expect(responseBody.dependencies.database.max_connections).toBeGreaterThan(0);

  expect(responseBody.dependencies.database.openned_connections).toBeDefined();
  expect(responseBody.dependencies.database.openned_connections).toEqual(1);
});
