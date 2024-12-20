import React from "react";

const BookingForm = (props) => {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [Guest, setGuest] = React.useState("");
  const [occasion, setOccasion] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      Guest,
      occasion,
    };
    props.SubmitForm(formData);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            <div>
              <label htmlFor="book-guest">Number of Guests:</label>
              <input
                id="book-guest"
                value={Guest}
                min={1}
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
