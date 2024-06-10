package com.SpringAndReact.SyRFullStack.service.impl;

import com.SpringAndReact.SyRFullStack.dto.ClientDto;
import com.SpringAndReact.SyRFullStack.service.ClientService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClientServiceImpl implements ClientService {

    private ModelMapper modelMapper;

    @Override
    public ClientDto addClient(ClientDto clientDto) {
        return null;
    }

    @Override
    public ClientDto getClientById(Long clientId) {
        return null;
    }

    @Override
    public List<ClientDto> getAllClients() {
        return null;
    }

    @Override
    public ClientDto updateClient(Long clientId, ClientDto updatedClient) {
        return null;
    }

    @Override
    public void deleteClient(Long clientId) {

    }
}
