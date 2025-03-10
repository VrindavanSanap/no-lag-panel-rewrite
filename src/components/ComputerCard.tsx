import React from "react";
import styles from "./ComputerCard.module.css"
import { computer_data} from "../types/computer_card";

export type computer_card_props= {
  data: computer_data;
  base_url: string;
};

const ComputerCard: React.FC<computer_card_props> = ({ data, base_url }) => {
  const image_url = `${base_url}/${data.image_url}`;
  return (
    <div className={styles.card}>
      <img
        src={image_url}
        alt={data.computer_name}
        className={styles.screenshot_image}
      />
      <div className={styles.card_content}>
        <h3>{data.computer_name}</h3>
        <div>
          <strong>Processor:</strong> {data.processor}
        </div>
        <div>
          <strong>OS:</strong> {data.system}
        </div>
        <div>
          <strong>Public IP:</strong> {data.public_ip}
        </div>
        <div>
          <strong>Location:</strong> {data.location}
        </div>
      </div>
    </div>
  );
};

export default ComputerCard;