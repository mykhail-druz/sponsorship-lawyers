export default async function handler(req:any, res:any) {

  if (req.method === "POST") {
    try {
      const zapierUrl =
        "https://hooks.zapier.com/hooks/catch/13171226/3rfsz0u/";
      const response = await fetch(zapierUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body), 
      });

      if (response.ok) {
        res
          .status(200)
          .json({ status: "Success", message: "Data sent to Zapier." });
      } else {
        res
          .status(response.status)
          .json({ status: "Error", message: "Failed to send data to Zapier." });
      }
    } catch (error) {
       const message =
         error instanceof Error ? error.message : "An unknown error occurred";
       res.status(500).json({ status: "Error", message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ status: "Error", message: "Method Not Allowed" });
  }
}
