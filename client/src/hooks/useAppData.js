import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  //Default states 
  const [state, setState] = useState({
    projects: [],
    deliverables: [],
    tasks: [],
  });
}