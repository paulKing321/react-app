import MeetUpList from "../components/meetups/MeetUpLIst";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://source.unsplash.com/user/c_v_r/500x300',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first meetup which you definitely should not miss.'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://source.unsplash.com/user/c_v_r/500x300',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a second meetup which you definitely should not miss.'
  }
];

function AllMeetUpsPage() {
  return (
    <section>
      <h1>All MeetUps Page</h1>
      <MeetUpList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetUpsPage;