const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

// ===== Events API =====
export const eventsAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) throw new Error("Failed to fetch events");
    return response.json();
  },

  create: async (data: {
    name: string;
    categoryId: string;
    location: string;
    dateEvent: string;
    description: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create event");
    return response.json();
  },

  getById: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    if (!response.ok) throw new Error("Failed to fetch event");
    return response.json();
  },

  update: async (
    id: number,
    data: {
      name: string;
      categoryId: string;
      location: string;
      dateEvent: string;
      description: string;
    },
  ) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update event");
    return response.json();
  },

  delete: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete event");
    return response.json();
  },
};

// ===== Categories API =====
export const categoriesAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  },

  create: async (data: { name: string }) => {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create category");
    return response.json();
  },

  getById: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`);
    if (!response.ok) throw new Error("Failed to fetch category");
    return response.json();
  },

  update: async (id: number, data: { name: string }) => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update category");
    return response.json();
  },

  delete: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete category");
    return response.json();
  },
};

// ===== Speakers API =====
export const speakersAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/speakers`);
    if (!response.ok) throw new Error("Failed to fetch speakers");
    return response.json();
  },

  create: async (data: { name: string; role: string; image: string }) => {
    const response = await fetch(`${API_BASE_URL}/speakers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create speaker");
    return response.json();
  },

  getById: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/speakers/${id}`);
    if (!response.ok) throw new Error("Failed to fetch speaker");
    return response.json();
  },

  update: async (
    id: number,
    data: { name: string; role: string; image: string },
  ) => {
    const response = await fetch(`${API_BASE_URL}/speakers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update speaker");
    return response.json();
  },

  delete: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/speakers/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete speaker");
    return response.json();
  },
};

export const authAPI = {
  register: async (data: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirm: data.passwordConfirm,
      }),
    });
    const body = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(body?.message || "Failed to register");
    }
    return body;
  },

  login: async (data: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(body?.message || "Failed to login");
    }
    return body;
  },
};

export const usersAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  },

  create: async (data: { name: string; email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(body?.message || "Failed to create user");
    }
    return body;
  },

  update: async (
    id: number,
    data: { name?: string; email?: string; password?: string },
  ) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const body = await response.json().catch(() => null);
    if (!response.ok) {
      throw new Error(body?.message || "Failed to update user");
    }
    return body;
  },

  delete: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete user");
    return response.json();
  },
};
