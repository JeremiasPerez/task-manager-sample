import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import '@testing-library/jest-dom/vitest'

import Card from "../../src/components/Tarea"

describe("Componente tarea", () => {

  it("Se muestra el título de la tarea", () => {
    const tarea = { id: 1, prioridad: 1, categoria: 'testing', responsable: 'jere', nombre: "Crear test" }
    const click = () => {}
    render(<Card infoTarea={tarea} gestionarClicEnTarea={click} />)
    expect(screen.getByText("Crear test")).toBeInTheDocument()
  })

  it("Se llama a la función recibida al hacer clic en la tarea", async () => {
    const tarea = { id: 1, prioridad: 1, categoria: 'testing', responsable: 'jere', nombre: "Crear test" }
    const funcionClick = vi.fn()
    render(<Card infoTarea={tarea} gestionarClicEnTarea={funcionClick} />)
    const el = screen.getByText("Crear test")
    await userEvent.click(el)
    expect(funcionClick).toHaveBeenCalled()
  })

})