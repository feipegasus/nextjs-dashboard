/**
 * Dear programmer:
 * When I wrote this code, only God and I knew how it worked.
 * Now, only god knows it!
 *
 * @description:
 * @author: Pegasus
 * @create: 2026/4/1 15:34
 */

import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {fetchCustomers} from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
      <main>
        <Breadcrumbs
            breadcrumbs={[
              {label: 'Invoices', href: '/dashboard/invoices'},
              {
                label: 'Create Invoice',
                href: '/dashboard/invoices/create',
                active: true,
              },
            ]}
        />
        <Form customers={customers}/>
      </main>
  );
}
