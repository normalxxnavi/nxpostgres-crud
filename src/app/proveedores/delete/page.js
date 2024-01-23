import Form from "@/components/Form_Proveedor"
import { db } from "@/lib/mysql"
import { deleteProveedores } from "@/lib/actions"

async function page({ searchParams }) {
  const [proveedor] = await db.query('select * from proveedores where id = ?', [searchParams.id]);
  return (
    <div>
      <h3>Eliminar Proveedor {searchParams.id}</h3>
      <Form action={deleteProveedores} title='Eliminar Proveedor' proveedor={proveedor} disabled={true} />
    </div>
  )
}

export default page