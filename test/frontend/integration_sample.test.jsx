import { render, screen, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import '@testing-library/jest-dom/vitest'

import Gestor from "../../src/components/Gestor"
import Api from "../../src/Api"
import {ThemeManager} from "../../src/components/ThemeManager"

vi.mock("../../src/Api")

describe("Gestor", () => {

  it("Carga y muestra las tareas", async () => {

    Api.getAllTasks.mockResolvedValue([
      { id: 1, prioridad: 1, estado: 'to do', categoria: 'cat1', responsable: 'yo', nombre: "Tarea 1" },
      { id: 2, prioridad: 1, estado: 'to do', categoria: 'cat2', responsable: 'yo', nombre: "Tarea 2" },
      { id: 3, prioridad: 1, estado: 'done', categoria: 'cat3', responsable: 'yo', nombre: "Tarea 3" },
      { id: 4, prioridad: 1, estado: 'done', categoria: 'cat4', responsable: 'yo', nombre: "Tarea 4" }
    ])

    render(<ThemeManager><Gestor /></ThemeManager>)

    await waitFor(() =>
      expect(screen.getByText("Tarea 1")).toBeInTheDocument()
    )

  })

})