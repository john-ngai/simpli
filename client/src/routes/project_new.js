import useAppData from '../hooks/useAppData';

export default function NewProject() {
  const { state } = useAppData();
  
  return (
    <main>
      <h1>Create a New Project</h1>
    </main>
  );
}
