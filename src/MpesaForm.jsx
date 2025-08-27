import React, { useState } from "react";

const MpesaForm = () => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const response = await fetch("https://localhost/Mpesa-mindmill/mpesa_stkpush.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, amount }),
    });

    const result = await response.json();
    setMessage(result.message || result.error || "Something went wrong");
    setLoading(false);
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    background: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={titleStyle}>MPESA Payment</h2>

      <input
        type="text"
        placeholder="Phone (254XXXXXXXXX)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={inputStyle}
        pattern="254\d{9}"
        title="Use format: 254XXXXXXXXX"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={inputStyle}
        required
      />

      <button type="submit" style={buttonStyle} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>

      {message && <p style={{ textAlign: "center", marginTop: "15px", color: "#555" }}>{message}</p>}
    </form>
  );
};

export default MpesaForm;
