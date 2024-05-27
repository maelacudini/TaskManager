import Card from "./_components/common/Card";
import CreateTask from "./_components/home/CreateTask";
import Tasks from "./_components/home/Tasks";
import Weather from "./_components/home/Weather";

export default function Home() {
  return (
    <main className="relative py-[5lvh] px-5 flex flex-wrap gap-8">
      {/* <Card>
        <Weather />
      </Card> */}
      <Tasks />
      <Card>
        <CreateTask />
      </Card>
    </main>
  );
}
