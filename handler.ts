export const hello = async (event: any = {}): Promise<any> => {
  console.log("Hello World");
  return { statusCode: 200, body: "Hello world" };
};
