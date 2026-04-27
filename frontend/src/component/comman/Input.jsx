const Input = ({ label, value }) => (
  <div >
    <label className="mb-1 block text-sm font-medium">{label}</label>
    <div className="relative">
      <input
        value={value} 
        className="w-full rounded-md border px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500"
      /> 
    </div>
  </div>
);

const Select = ({ label, value }) => (
  <div>
    <label className="mb-1 block text-sm font-medium">{label}</label>
    <select className="w-full rounded-md border px-3 py-2">
      <option>{value}</option>
    </select>
  </div>
);

export default Input