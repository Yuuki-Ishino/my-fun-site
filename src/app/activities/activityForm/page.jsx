import ActivityForm from "./activityForm";

export default function Page({ initialData, onSubmit }) {
  return (
    <>
      <ActivityForm
        initialData={initialData}
        onSubmit={onSubmit}
      ></ActivityForm>
    </>
  );
}
