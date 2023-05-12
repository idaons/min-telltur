import { useLocalStorageState } from "@/useLocalStorage";

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
              <option>Brine shrimp</option>
              <option>Red panda</option>
              <option>Spider monkey</option>
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
