/**
 * Dear programmer:
 * When I wrote this code, only God and I knew how it worked.
 * Now, only god knows it!
 *
 * @description:
 * @author: Pegasus
 * @create: 2026/4/1 17:09
 */

import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from '@/app/ui/invoices/edit-form';
import {fetchInvoiceById, fetchCustomers} from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
      <main>
        <Breadcrumbs breadcrumbs={[
          {
            label: 'Invoices', href: '/dashboard/invoices',
          },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}/>
        <Form invoice={invoice} customers={customers}/>
      </main>
  )
}
