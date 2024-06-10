package com.SpringAndReact.SyRFullStack.service;

import com.SpringAndReact.SyRFullStack.dto.ClientDto;
import com.SpringAndReact.SyRFullStack.entity.Client;

import java.util.List;

public interface ClientService {
    ClientDto addClient(ClientDto clientDto);
    ClientDto getClientById(Long clientId);
    List<ClientDto> getAllClients();
    ClientDto updateClient(Long clientId, ClientDto updatedClient);
    void deleteClient(Long clientId);
    Client getClientEntityById(Long clientId);
}
