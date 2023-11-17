describe("fetchEnrollmentImport", () => {
  const enr = { /* some enrollment data */ };
  const response = { status: 200, json: jest.fn().mockResolvedValue({ /* some parsed data */ }) };
  const fetchMock = jest.spyOn(window, "fetch").mockResolvedValue(response);

  afterEach(() => {
    fetchMock.mockClear();
  });

  it("should call fetch with the correct arguments", async () => {
    await fetchEnrollmentImport(enr);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/api/enrollment/import`, {
      method: "POST",
      headers: {
        Authorization: API_AUTH,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(enr),
    });
  });

  it("should return the parsed response and status", async () => {
    const result = await fetchEnrollmentImport(enr);

    expect(result).toEqual({ status: response.status, ...response.json.mock.results[0].value });
  });
});
