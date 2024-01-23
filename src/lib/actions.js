'use server'
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function getArticulos() {
  try {
    const { rows } = await sql`select * from articulos;`
    return rows;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}

export async function newArticulo(formData) {
  try {
    const nombre = formData.get('nombre');
    const descripcion = formData.get('descripcion');
    const precio = formData.get('precio');

    const results = await sql`
    insert into articulos(nombre,descripcion,precio) values (${nombre}, ${descripcion}, ${precio});
    `
    console.log(results);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}


export async function editArticulo(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')

  try {
    const results = await sql` 
    update articulos set nombre=${nombre}, descripcion=${descripcion}, precio=${precio} where id = ${id};
    `
    console.log(results);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteArticulo(formData) {
  try {
    const id = formData.get('id');

    const results = await sql`delete from articulos where id = ${id};`
    console.log(results);
    revalidatePath('/articulos')
  } catch (error) {
    console.log(error);
  }

  redirect('/articulos');
}

export async function getProveedores() {
  try {
    const { rows } = await sql`select * from proveedores;`
    return rows;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}

export async function newProveedor(formData) {
  try {
    const nombre = formData.get('nombre');
    const telefono = formData.get('telefono');

    const results = await sql`
    insert into proveedores(nombre,telefono) values (${nombre}, ${telefono});
    `
    console.log(results);
    revalidatePath('/proveedores')
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}

export async function editProveedores(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const telefono = formData.get('telefono')

  try {
    const results = await sql` 
    update proveedores set nombre=${nombre}, telefono=${telefono} where id = ${id};
    `
    console.log(results);
    revalidatePath('/proveedores')
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}

export async function deleteProveedores(formData) {
  try {
    const id = formData.get('id');

    const results = await sql`delete from proveedores where id = ${id};`
    console.log(results);
    revalidatePath('/proveedores')
  } catch (error) {
    console.log(error);
  }

  redirect('/proveedores');
}