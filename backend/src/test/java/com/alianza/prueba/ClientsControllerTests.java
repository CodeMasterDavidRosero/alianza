package com.alianza.prueba;

import com.alianza.prueba.controllers.ClientsController;
import com.alianza.prueba.models.ClientsModel;
import com.alianza.prueba.services.ClientsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.util.NestedServletException;

import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

public class ClientsControllerTests {

    private MockMvc mockMvc;

    @Mock
    private ClientsService clientsService;

    @InjectMocks
    private ClientsController clientsController;

    @BeforeEach
    public void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(clientsController).build();
    }

    @Test
    public void testFindByIdWhenClientExists() throws Exception {
        // Simula un cliente de prueba
        ClientsModel mockClient = new ClientsModel();
        mockClient.setId(1);
        mockClient.setBusiness_id("John Doe");

        // Configura el comportamiento del servicio mock
        Mockito.when(clientsService.findById(1)).thenReturn(Optional.of(mockClient));

        // Realiza la solicitud GET al controlador y verifica la respuesta
        mockMvc.perform(get("/clients/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("John Doe"));
    }

    @Test
    public void testFindByIdWhenClientDoesNotExist() throws Exception {
        // Configura el comportamiento del servicio mock para devolver un Optional vacío
        Mockito.when(clientsService.findById(2)).thenReturn(Optional.empty());

        // Realiza la solicitud GET al controlador y verifica que devuelva un error 404
        mockMvc.perform(get("/clients/2")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }
}
