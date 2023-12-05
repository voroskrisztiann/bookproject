import styles from "./AppLayout.module.css";
import { useEffect, useState } from "react";

async function fetchData() {
  try {
    const response = await fetch("../src/data/books.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function AppLayout() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setBooks(data.books || []);
      } catch (error) {
        setBooks([]);
      }
    };

    fetchDataAsync();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      (selectedCategory === null ||
        (book.categories && book.categories.includes(selectedCategory))) &&
      (book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.description.toLowerCase().includes(query.toLowerCase()))
  );
  const uniqueCategories = Array.from(
    new Set(books.flatMap((book) => book.categories || []))
  );

  return (
    <section className={styles.sectionApp}>
      <div className={styles.containerInputs}>
        <input
          type="text"
          placeholder="Kezdj gépelni..."
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className={styles.select}
          value={selectedCategory || ""} // Ensure value is an empty string if null
          onChange={(e) => setSelectedCategory(e.target.value || null)} // Ensure null if value is an empty string
        >
          <option value="">Válassz kategóriát</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ul className={styles.containerCards}>
        {filteredBooks.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src="../src/assets/img-book.jpg" className={styles.imgBook} />
            <h3 className={styles.cardHeading}>{book.title}</h3>
            <p className={styles.cardDescription}>{book.description}</p>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default AppLayout;
