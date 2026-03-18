import { describe, it, expect } from "vitest"
import {filterByStatus} from "../../src/utils"

describe("filterTasks", () => {

  it("filtra las tareas que tienen el estado indicado", () => {

    const tasks = [
      { id: 1, estado: "to do" },
      { id: 2, estado: "done" },
      { id: 3, estado: "to do" }
    ]

    const result = filterByStatus(tasks, "to do")
    const result2 = filterByStatus(tasks, "done")
    const result3 = filterByStatus(tasks, "in progress")

    expect(result).toHaveLength(2)
    expect(result2).toHaveLength(1)
    expect(result3).toHaveLength(0)
  })

})
