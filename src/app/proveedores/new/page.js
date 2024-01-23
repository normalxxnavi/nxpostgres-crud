import Form from "@/components/Form_Proveedor"
import { newProveedor } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo Proveedor</h3>
        <Form action={newProveedor} title='Crear Proveedor' proveedor={null} disabled={false}  />
    </div>
  )
}

export default page