const usersBaseAPI = 'https://reqres.in/api/users';

async function fetchUsersData(pageNumber: number) {
  const response = await fetch(`${usersBaseAPI}?page=${pageNumber}`);

  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }
  return response.json();
}

/**
 * TODO: Tak ein count
 * This method is because test require in memory pagination, filtering and sorting normally
 * all of these are made in backend but now we take all two pages of users into memory.
 * @param pageNumbers
 */
export async function fetchAllUsersData(pageNumbers:number = 2) {
  const promises: any = [];
  for (let i = 1; i <= pageNumbers; i++) {
    promises.push(fetchUsersData(i));
  }

  const allData = await Promise.all(promises);
  return allData.map((d: any) => d.data).flat();
}
