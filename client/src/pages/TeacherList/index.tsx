import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";

import { Container } from "./styles";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [week_day, setWeekDay] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.get("/classes", {
        params: {
          week_day,
          subject,
          time,
        },
      });

      setTeachers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            options={[
              { value: "Arts", label: "Arts" },
              { value: "Biology", label: "Biology" },
              { value: "Science", label: "Science" },
              { value: "Physical Education", label: "Physical Education" },
              { value: "Physics", label: "Physics" },
              { value: "Geography", label: "Geography" },
              { value: "Story", label: "Story" },
              { value: "Mathematics", label: "Mathematics" },
              { value: "Language", label: "Language" },
              { value: "Chemistry", label: "Chemistry" },
            ]}
          />

          <Select
            name="week_day"
            label="Day of the week"
            value={week_day}
            onChange={(event) => setWeekDay(event.target.value)}
            options={[
              { value: "0", label: "Sunday" },
              { value: "1", label: "Monday" },
              { value: "2", label: "Tuesday" },
              { value: "3", label: "Wednesday" },
              { value: "4", label: "Thursday" },
              { value: "5", label: "Friday" },
              { value: "6", label: "Saturday" },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            onChange={(event) => setTime(event.target.value)}
            value={time}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.teacher.id} {...teacher} />
        ))}
      </main>
    </Container>
  );
}

export default TeacherList;
