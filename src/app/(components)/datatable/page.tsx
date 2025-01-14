import Header from "@/core-components/header";
import UsersDataTable from "./_components/users-datatable";

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

export default async function DataTablePage() {
  const users = await fetchUsers();

  return (
    <>
      <Header title="DataTable" />

      <UsersDataTable users={users} />
    </>
  );
}
