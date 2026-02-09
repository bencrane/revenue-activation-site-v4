import { Container } from "@/components/shared";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
