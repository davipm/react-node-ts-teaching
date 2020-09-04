import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

import { Container as Content } from "../../styles/global";
import { Container, ScheduleItem } from "./styles";
import warningIcon from "../../assets/images/icons/warning.svg";
import api from "../../services/api";

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  async function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    };

    try {
      await api.post("/classes", data);
      alert("Successful registration!");
      history.push("/");
    } catch (error) {
      alert("Error");
    }
  }

  return (
    <Container as={Content}>
      <PageHeader
        title="How amazing you want to teach."
        description="The first step is to fill out this registration form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your information's</legend>

            <Input
              name="name"
              label="Full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(event) => setAvatar(event.target.value)}
            />

            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
            />

            <Textarea
              name="bio"
              label="Biography"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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

            <Input
              name="cost"
              label="Cost of your hour per class"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available times{" "}
              <button onClick={addNewScheduleItem}>+ New time</button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  name="week_day"
                  label="Day of the week"
                  value={scheduleItem.week_day}
                  onChange={(event) =>
                    setScheduleItemValue(index, "ween_day", event.target.value)
                  }
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
                  name="from"
                  label="From"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(event) =>
                    setScheduleItemValue(index, "from", event.target.value)
                  }
                />

                <Input
                  name="to"
                  label="To"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(event) =>
                    setScheduleItemValue(index, "to", event.target.value)
                  }
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Important warning" />
              Important! <br />
              Fill in all the details
            </p>
            <button type="submit">Save registration</button>
          </footer>
        </form>
      </main>
    </Container>
  );
}

export default TeacherForm;
