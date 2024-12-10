interface BreadcrumbItem {
  title: string;
  href: string;
}

export function useBreadcrumb(url: string): BreadcrumbItem[] {
  const { navigation } = useContent();

  const breadcrumbItems: BreadcrumbItem[] = [];
  const segments = url.split('/').filter((segment) => segment !== '');

  let href = '';
  let nav = navigation.value;

  for (const segment of segments) {
    const cleanSegment = segment.replace('.html', '');
    href += `/${cleanSegment}`;
    const page = nav.find((x) => (x._path as string) === href);
    nav = page?.children;
    breadcrumbItems.push({ title: page?.title ?? cleanSegment, href });
  }

  return breadcrumbItems;
}
