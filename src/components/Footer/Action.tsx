"use server";
//////////////// just for checking ///////
export default async function myAction(data) {
  try {
    console.log(data);
    const response = await fetch(
      "https://node.saarbiotech.in/TestEmail.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response;
    console.log(result);
  } catch (error) {
    console.log(error);
    //   setError("name", {
    //     ...error,
    //     message: error.message,
    //   });
  } finally {
    //   reset();
  }
}
