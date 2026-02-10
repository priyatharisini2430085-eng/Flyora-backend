// BOOKINGS BY EVENT
new Chart(document.getElementById("eventChart"), {
  type: "bar",
  data: {
    labels: ["Wedding", "Proposal", "Birthday", "Anniversary"],
    datasets: [{
      data: [8, 6, 4, 3],
      backgroundColor: "#3b82f6",
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,   // ✅ KEY LINE
    plugins: { legend: { display: false } },
    scales: {
      y: { ticks: { stepSize: 2 } }
    }
  }
});


// APPROVAL STATUS
new Chart(document.getElementById("statusChart"), {
  type: "doughnut",
  data: {
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [{
      data: [15, 6, 3],
      backgroundColor: ["#22c55e", "#fb923c", "#ef4444"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,   // ✅ KEY LINE
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12 }
      }
    }
  }
});
/* ================= VENDOR MANAGEMENT ================= */

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert(
      "Vendor Details\n\n" +
      "Service scope, pricing slabs,\n" +
      "SLA terms & contract history\n\n" +
      "(Demo view only)"
    );
  });
});

