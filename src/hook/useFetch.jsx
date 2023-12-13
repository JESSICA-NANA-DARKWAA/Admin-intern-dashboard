import internsData from "./../src/internsData"; // Import the empty internsData array

const fetchInternsData = async () => {
  try {
    const response = await fetch("https://api.example.com/interns");
    const data = await response.json();

    internsData.push(...data); // Add the fetched intern data to the internsData array
  } catch (error) {
    console.log("Error fetching intern data:", error);
  }
};

fetchInternsData();
