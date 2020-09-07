import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import { Container } from "./styles";

import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherProps {
  teacher: Teacher;
}

function TeacherItem({ teacher }: TeacherProps) {
  async function createNewConnection() {
    await api.post("/connections", {
      user_id: teacher.id,
    });
  }

  return (
    <Container>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Price / Hour
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`http://wa.me/${teacher.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" /> Get in touch
        </a>
      </footer>
    </Container>
  );
}
export default TeacherItem;
