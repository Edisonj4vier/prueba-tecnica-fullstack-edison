# 📦 Product Manager - Full Stack Application

Aplicación Full-Stack para la gestión completa de productos, desarrollada con Spring Boot 4.0.1 en el backend y Vue 3 con TypeScript en el frontend. Incluye funcionalidades CRUD, validación robusta y una interfaz de usuario moderna y responsive.

## 🚀 Tecnologías Utilizadas

### Backend

- **Java 17** - Lenguaje de programación principal
- **Spring Boot 4.0.1** - Framework principal del backend
- **Spring Data JPA** - Persistencia de datos
- **Spring Validation** - Validación de datos con Jakarta Validation
- **H2 Database** - Base de datos en memoria para desarrollo
- **Maven** - Gestión de dependencias y construcción
- **Lombok** - Reducción de código boilerplate

### Frontend

- **Vue 3** - Framework de JavaScript progresivo
- **TypeScript 5.9** - Tipado estático para JavaScript
- **Vite 7.2** - Herramienta de construcción y desarrollo
- **Composition API** - API de composición de Vue 3

## 📁 Estructura del Proyecto

```
prueba-tecnica-fullstack-edison/
├── backend/
│   └── product-manager/          # API REST en Spring Boot
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/example/product_manager/
│       │   │   │   ├── ProductManagerApplication.java    # Clase principal
│       │   │   │   ├── model/
│       │   │   │   │   └── Product.java                  # Entidad JPA con validaciones
│       │   │   │   ├── repository/
│       │   │   │   │   └── ProductRepository.java        # Interfaz JPA Repository
│       │   │   │   ├── service/
│       │   │   │   │   └── ProductService.java           # Lógica de negocio
│       │   │   │   ├── controller/
│       │   │   │   │   └── ProductController.java        # REST Controller
│       │   │   │   └── exception/
│       │   │   │       └── GlobalExceptionHandler.java   # Manejo global de errores
│       │   │   └── resources/
│       │   │       └── application.properties            # Configuración H2
│       │   └── test/
│       │       └── java/com/example/product_manager/
│       │           └── ProductManagerApplicationTests.java
│       ├── pom.xml                                       # Dependencias Maven
│       ├── mvnw & mvnw.cmd                              # Maven Wrapper
│       └── HELP.md
│
└── frontend/                     # Aplicación Vue 3 + TypeScript
    ├── src/
    │   ├── components/
    │   │   ├── ProductForm.vue                           # Formulario de productos
    │   │   └── ProductList.vue                           # Lista de productos
    │   ├── services/
    │   │   └── ProductService.ts                         # Cliente API REST
    │   ├── types/
    │   │   └── Product.ts                               # Interfaces TypeScript
    │   ├── App.vue                                       # Componente raíz
    │   ├── main.ts                                       # Punto de entrada
    │   └── style.css                                     # Estilos globales
    ├── public/                                           # Recursos estáticos
    ├── index.html                                        # HTML principal
    ├── package.json                                      # Dependencias npm
    ├── vite.config.ts                                    # Configuración Vite
    ├── tsconfig.json & tsconfig.app.json                # Configuración TypeScript
    └── README.md
```

## 🎯 Características Principales

- **✅ CRUD Completo**: Crear y listar productos
- **🔍 Validación Robusta**: Validaciones tanto en frontend como backend
- **🎨 UI Moderna**: Interfaz responsive con Vue 3 y CSS moderno
- **🛡️ Type Safety**: TypeScript para mayor seguridad de tipos
- **📊 Base de Datos**: H2 embebida con consola web para desarrollo
- **🔄 Arquitectura Limpia**: Separación clara de capas y responsabilidades

## ⚙️ Instalación y Ejecución

### Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas:

- **Java 17** o superior
- **Maven 3.6+**
- **Node.js 18+** y npm

### 🔧 Configuración del Backend (Spring Boot)

1. **Navegar al directorio del backend:**

```powershell
cd backend/product-manager
```

2. **Compilar el proyecto:**

```powershell
./mvnw clean install
# o en Windows
mvnw.cmd clean install
```

3. **Ejecutar la aplicación:**

```powershell
./mvnw spring-boot:run
# o en Windows
mvnw.cmd spring-boot:run
```

✅ El servidor estará disponible en `http://localhost:8080`

**📡 API Endpoints Disponibles:**

- `POST /api/products` - Crear un nuevo producto
- `GET /api/products` - Obtener lista de todos los productos
- `GET /h2-console` - Consola H2 Database (JDBC URL: `jdbc:h2:mem:productdb`)

### 🎨 Configuración del Frontend (Vue 3)

1. **Navegar al directorio del frontend:**

```powershell
cd frontend
```

2. **Instalar dependencias:**

```powershell
npm install
```

3. **Ejecutar en modo desarrollo:**

```powershell
npm run dev
```

✅ La aplicación estará disponible en `http://localhost:5173`

## 📋 Funcionalidades Implementadas

### ✅ Gestión de Productos

1. **➕ Crear Productos**

   - Formulario reactivo con validación en tiempo real
   - Campos requeridos: nombre, precio y stock
   - Validaciones específicas:
     - **Nombre**: No puede estar vacío
     - **Precio**: Debe ser mayor a 0 (BigDecimal)
     - **Stock**: No puede ser negativo (Integer)
   - Timestamp automático de creación

2. **📋 Listar Productos**

   - Tabla responsive con todos los productos
   - Información mostrada: ID, Nombre, Precio, Stock y Fecha de Creación
   - Actualización automática después de crear productos
   - Formato de moneda para precios
   - Formato de fecha legible

3. **🔒 Validación Multicapa**

   - **Frontend**: Validación reactiva con TypeScript
   - **Backend**: Anotaciones Jakarta Validation
   - **Base de datos**: Constraints a nivel de esquema

4. **⚠️ Manejo de Errores Robusto**
   - GlobalExceptionHandler personalizado en backend
   - Mensajes de error descriptivos y localizados
   - Feedback visual inmediato en frontend
   - Estados de carga y error en la interfaz

### 🏗️ Arquitectura Técnica

- **Patrón MVC**: Controller → Service → Repository
- **Inyección de dependencias** con Spring
- **Composition API** de Vue 3 con `<script setup>`
- **Type Safety** completo con TypeScript
- **Separación de responsabilidades** clara

## 🧪 Testing y Desarrollo

### 🔗 Probar la API con cURL

**Crear un producto:**

```powershell
curl -X POST http://localhost:8080/api/products `
  -H "Content-Type: application/json" `
  -d '{
    "name": "Laptop Gaming",
    "price": 1299.99,
    "stock": 15
  }'
```

**Listar todos los productos:**

```powershell
curl http://localhost:8080/api/products
```

**Respuesta esperada:**

```json
[
  {
    "id": 1,
    "name": "Laptop Gaming",
    "price": 1299.99,
    "stock": 15,
    "createdAt": "2026-01-07T10:30:45.123456"
  }
]
```

### 🗃️ Acceso a la Base de Datos H2

Accede a la consola web H2 en `http://localhost:8080/h2-console`:

- **JDBC URL**: `jdbc:h2:mem:productdb`
- **Username**: `sa`
- **Password**: (dejar en blanco)
- **Driver Class**: `org.h2.Driver`

**Consultas útiles:**

```sql
-- Ver todos los productos
SELECT * FROM PRODUCTS ORDER BY CREATED_AT DESC;

-- Estadísticas
SELECT COUNT(*) as total_products,
       SUM(stock) as total_stock,
       AVG(price) as avg_price
FROM PRODUCTS;
```
## 📝 Detalles Técnicos

### 🔧 Backend (Spring Boot)

**Arquitectura:**

- **Controller Layer**: Manejo de HTTP requests/responses
- **Service Layer**: Lógica de negocio
- **Repository Layer**: Acceso a datos con JPA
- **Exception Layer**: Manejo globalizado de errores

**Características:**

- **Validación Jakarta**: Anotaciones estándar (@NotBlank, @DecimalMin, etc.)
- **CORS Habilitado**: Configurado para desarrollo frontend
- **H2 Console**: Consola web para inspección de datos
- **Auto-timestamps**: Creación automática de fechas con @PrePersist
- **Lombok**: Reducción de boilerplate con anotaciones

### 🎨 Frontend (Vue 3 + TypeScript)

**Arquitectura:**

- **Composition API**: `<script setup>` para mejor organización
- **Type Safety**: TypeScript en todo el stack frontend
- **Reactive State**: Refs y reactive objects para reactividad
- **Component-based**: Componentes reutilizables y modulares

**Características:**

- **Fetch API**: Comunicación HTTP nativa
- **Form Handling**: Validación y manejo reactivo de formularios
- **Error Boundaries**: Manejo robusto de errores de red
- **CSS Modular**: Estilos scoped por componente
                   |

## 👨‍💻 Autor

**Edison Javier**  
📧 Contacto para consultas técnicas  
🔗 [GitHub Profile](https://github.com/tu-usuario)

---

