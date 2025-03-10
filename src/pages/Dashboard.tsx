import { SetStateAction, useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import profile_img from "../assets/profile.jpg";
const BASE_URL = "https://nolagpanel.duckdns.org:5001";
import ComputerCard from "../components/ComputerCard.tsx";
import Pagination from "../components/Pagination.tsx";

const Dashboard = () => {
  const [items, set_items] = useState([]);
  const [current_page, set_current_page] = useState(1);
  const [total_pages, set_total_pages] = useState(null);

  useEffect(() => {
    const fetch_total_pages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/total_pages`);
        const data = await response.json();
        console.log(data);
        set_total_pages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetch_total_pages();
  }, []);



  useEffect(() => {
    async function get_data() {
      const response = await fetch(`${BASE_URL}/page/${current_page}`);
      const json_data = await response.json();
      set_items(json_data.data);
    }
    get_data();
  }, [current_page]);

  return (
    <div>
      <div className={styles.top_header}>
        <div className={styles.title}>
          <h1>Nolag Panel</h1>
        </div>
        <div className={styles.profile}>
          <img className={styles.profile_img} src={profile_img} alt="" />
        </div>
      </div>
      <div className={styles.cards_container}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <ComputerCard data={item} base_url={BASE_URL} />
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <Pagination current_page={current_page} total_pages={total_pages ?? 0} on_page_change={(new_page: SetStateAction<number>) => set_current_page(new_page)} />
    </div>
  );
};

export default Dashboard;
