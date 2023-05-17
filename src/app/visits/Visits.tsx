import { useLocalStorageState } from "@/useLocalStorageState";

const Visits = () => {
  const [visited, setVisited] = useLocalStorageState("tiPaToppVisited", false);

  return (
    <div>
      <form>
        <p>
          <label>
            Turmål
            <select>
              <option value="default">Choose…</option>
            </select>
          </label>
        </p>
        <div>
          <button value="cancel" formMethod="dialog">
            Cancel
          </button>
          <button id="confirmBtn" value="default">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Visits;
