export default function Static({ user }) {
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://gerencianet.com.br/wp-json/wp/v2/users/45'
  );
  const user = await response.json();
  return {
    props: {
      user,
    },
    revalidate: 121,
  };
}
