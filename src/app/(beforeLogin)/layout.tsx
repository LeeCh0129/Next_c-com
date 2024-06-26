import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 z.com일 때(주소가 3000번)는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3000/i/flow/login dlfEosms children->i/flow/login/page.tsx, modal->@modal/i/flow/page.tsx
